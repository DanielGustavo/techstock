import FeatherIcon from 'feather-icons-react';
import ReactLoading from 'react-loading';

import logo from '../../assets/Logo.svg';
import logo_bg from '../../assets/Logo_bg.svg';

import * as S from './styles';
import { usePDF } from 'react-to-pdf';
import { createPortal } from 'react-dom';
import { getUser } from '../../utils/getUser';
import { format } from 'date-fns';
import { TLog } from '../../services/techstock/loadLogs';
import { useState } from 'react';

import * as techstock from '../../services/techstock';

function Sidebar() {
  const [logs, setLogs] = useState([] as TLog[]);
  const [isLoadingLogs, setIsLoadingLogs] = useState(false);
  const [generating, setGenerating] = useState(false);

  const { toPDF, targetRef } = usePDF();

  function logout() {
    localStorage.setItem('user', '');
    location.href = '/';
  }

  async function fetchLogs() {
    setLogs(await techstock.loadLogs());
  }

  async function genPdf() {
    setGenerating(true);
    setIsLoadingLogs(true);
    await fetchLogs();

    setTimeout(() => {
      toPDF({ filename: 'techstock_logs.pdf' });
      setIsLoadingLogs(false);
      setGenerating(false);
    }, 50);
  }

  return (
    <S.Container>
      <header>
        <img src={logo} />

        <S.NavButtons>
          <S.NavButton
            selected={!!location.href.match(/\/stock|product/i)}
            to="/stock"
          >
            <FeatherIcon icon="package" />
            <span>Estoque</span>
          </S.NavButton>

          <S.NavButton
            selected={!!location.href.match(/\/sales|sale/i)}
            to="/sales"
          >
            <FeatherIcon icon="trending-up" />
            <span>Vendas</span>
          </S.NavButton>

          <S.NavButton selected={false} to="#" onClick={() => genPdf()}>
            <FeatherIcon icon="file-text" />
            <span>Histórico</span>

            {isLoadingLogs && (
              <ReactLoading
                color="#fefefe"
                type="spin"
                height={15}
                width={15}
              />
            )}
          </S.NavButton>
        </S.NavButtons>
      </header>

      <footer>
        <S.NavButton selected={false} as="button" to="#" onClick={logout}>
          <FeatherIcon icon="log-out" />
          <span>Sair</span>
        </S.NavButton>
      </footer>

      {generating &&
        createPortal(
          <S.PdfView ref={targetRef}>
            <header>
              <span>
                <img src={logo_bg} />
              </span>

              <div>
                <p>
                  Log gerado por: <span>{getUser()?.name ?? '???'}</span>
                </p>
                <p>
                  Em: <span>{format(new Date(), 'dd/MM/yyyy HH:mm:ss')}</span>
                </p>
              </div>
            </header>

            <ul>
              {logs.map((log, index) => (
                <li
                  key={log.user_name + log.datetime + log.description + index}
                >
                  <div>
                    <span>
                      {format(
                        new Date(log.datetime).getTime(),
                        'dd/MM/yyyy HH:mm:ss'
                      )}
                    </span>{' '}
                    - <span>{log.user_name}</span>
                  </div>

                  {log.description}
                </li>
              ))}
            </ul>
          </S.PdfView>,
          document.querySelector('body') as any
        )}
    </S.Container>
  );
}

export default Sidebar;

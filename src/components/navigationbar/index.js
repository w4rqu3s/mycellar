import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';

import {
    NavContainer,
    NavContent,
    Logo,
    LogoIcon,
    NavTabs,
    NavTab,
    UserSection,
    UserInfo,
    UserAvatar,
    LogoutButton,
} from './style'

export function NavigationBar () {

  const navigate = useNavigate();
  const location = useLocation();
  const user = {
    name: 'nousername',
    email: 'user@gmail.com'
  }
  // const user = location.state?.user;
  // console.log({user});

  const sections = [
    { id: 'drinklist', label: 'Minha Adega', icon: '🍷' },
    { id: 'wannabuy', label: 'Lista de Desejos', icon: '⭐' }
  ];

  return (
      <NavContainer>
        <NavContent>
          <Logo>
            <LogoIcon>🍷</LogoIcon>
            <span>Adega Manager</span>
          </Logo>

          <NavTabs className="hidden md:flex">
            {sections.map(section => (
              <NavTab
                onClick={() => navigate('/' + section.id, {state: {user: user}})}
              >
                <span style={{ marginRight: '0.5rem' }}>{section.icon}</span>
                {section.label}
              </NavTab>
            ))}
          </NavTabs>

          <UserSection>
                <UserInfo>
                  <UserAvatar>
                    {user.name ? user.name[0].toUpperCase() : 'N'}
                  </UserAvatar>
                  <span>Olá, {user.name ? user.name : 'noname'}</span>
                </UserInfo>
                <LogoutButton onClick={() => navigate('/')}>
                  Sair
                </LogoutButton>
          </UserSection>
        </NavContent>
      </NavContainer>
  );
};

export default NavigationBar;


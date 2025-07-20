import { useNavigate } from 'react-router-dom';

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

export function NavigationBar ({ 
  activeSection, 
  user
}) {

  const navigate = useNavigate();

  const sections = [
    { id: 'drinklist', label: 'Minha Adega', icon: '🍷' },
    { id: 'wannabuy', label: 'Lista de Desejos', icon: '⭐' }
  ];

  const getUserInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

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
                active={activeSection === section.id}
                onClick={() => navigate('/' + section.id)}
              >
                <span style={{ marginRight: '0.5rem' }}>{section.icon}</span>
                {section.label}
              </NavTab>
            ))}
          </NavTabs>

          <UserSection>
                <UserInfo>
                  <UserAvatar>
                    {getUserInitials(user.name)}
                  </UserAvatar>
                  <span>Olá, {user.name?.split(' ')[0] || 'Usuário'}</span>
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


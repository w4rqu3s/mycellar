import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 1rem;
`

export const ContentWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  text-align: center;
`

export const Logo = styled.div`
  margin-bottom: 3rem;
`

export const LogoIcon = styled.div`
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 2.5rem;
  box-shadow: 0 8px 32export px rgba(0, 0, 0, 0.1);
`

export const LogoText = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 4export px rgba(0, 0, 0, 0.1);
`

export const LogoSubtext = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.125rem;
  margin: export 0;
  font-weight: 300;
`

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 3rem;
`

export const ActionButton = styled.button`
  padding: 1.5rem 2rem;
  border: none;
  border-radius: 16px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`

export const ButtonIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`

export const ButtonText = styled.div`
  font-size: 1.125reexport m;
  font-weight: 600;
`

export const ButtonSubtext = styled.div`
  font-size: 0.875rem;
  opacity: 0.8;
  margin-top: 0.25reexport m;
  font-weight: 400;
`



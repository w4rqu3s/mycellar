import styled from 'styled-components'

export const Container = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  overflow: hidden;
  cursor: pointer;
`

export const DrinkImage = styled.div`
  height: 200px;
  background: ${'linear-gradient(135deg, #7c3aed, #a855f7)'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
`

export const DrinkInfo = styled.div`
  padding: 1.5rem;
`

export const DrinkName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
`

export const DrinkDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
`

export const DetailLabel = styled.span`
  color: #6b7280;
  font-weight: 500;
`

export const DetailValue = styled.span`
  color: #1f2937;
  font-weight: 600;
`

export const TypeBadge = styled.span`
  background: #ede9fe;
  color: #7c3aed;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`

export const ActionButton = styled.button`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  color: #374151;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
`
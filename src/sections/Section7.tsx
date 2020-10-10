import React from 'react';

import { computedValueWithKeyframe } from 'src/lib/helper';
import styled from 'styled-components';

export function Section7({ scrollTop }: { scrollTop: number }) {
  return (
    <section style={{ position: 'relative' }}>
      <div style={{ height: '3300px' }}>
        <div
          style={{
            position: 'sticky',
            zIndex: -1,
            top: '50%',
            width: '100%',
            marginBottom: '400px',
            transform: 'translate(0, -50%)',
          }}>
          <div
            style={{
              color: 'white',
              opacity: computedValueWithKeyframe(scrollTop, 9700, 2000, { 0: 0, 35: 1, 100: 1 }, 'easeInOutQuad'),
              marginBottom: 15,
            }}>
            힘든 시기지만
          </div>
          <div
            style={{
              color: 'white',
              opacity: computedValueWithKeyframe(scrollTop, 10000, 1600, { 0: 0, 35: 1, 100: 1 }, 'easeInOutQuad'),
              marginBottom: 15,
            }}>
            작은 축복을
          </div>
          <div
            style={{
              color: 'white',
              opacity: computedValueWithKeyframe(scrollTop, 10300, 1200, { 0: 0, 35: 1, 100: 1 }, 'easeInOutQuad'),
              marginBottom: 15,
            }}>
            보태어 주시기 바랍니다
          </div>

          <div
            style={{
              opacity: computedValueWithKeyframe(scrollTop, 10600, 800, { 0: 0, 35: 1, 100: 1 }, 'easeInOutQuad'),
              marginBottom: 15,
            }}>
            <ShortHr />
            <Table>
              <tbody>
                <Tr>
                  <Td>
                    <Parent>유영선</Parent>
                    <Parent>오민애의</Parent>
                  </Td>
                  <Td>
                    <Roll>차남</Roll>
                    <Name>동균</Name>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Parent>한명자의</Parent>
                  </Td>
                  <Td>
                    <Roll>차녀</Roll>
                    <Name>한주</Name>
                  </Td>
                </Tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}

const ShortHr = styled.div`
  width: 16%;
  border-top: 1px solid #fff;
  margin: auto;
  margin-top: 80px;
  padding-bottom: 80px;
  opacity: 0.8;
`;

const Table = styled.table`
  margin: auto;
  border-collapse: collapse;
  width: auto;
  font-size: 1.15rem;
  line-height: 2rem;
  color: #fff;

  &,
  & tr,
  & td {
    border: none;
  }
`;

const Parent = styled.span<{ opacity?: number }>`
  opacity: ${({ opacity = 1 }) => opacity};

  &:nth-child(even) {
    padding-left: 10px;
  }
`;

const Tr = styled.tr`
  margin-bottom: 10px;
`;
const Td = styled.td`
  text-align: center;
`;
const Roll = styled.span`
  padding-left: 10px;
`;
const Name = styled.span`
  padding-left: 10px;
  font-weight: 800;
  font-size: 1.2rem;
`;

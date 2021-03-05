import styled, { css } from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -16px;
    margin-left: -16px;
    ${propToStyle('flex')}
    ${propToStyle('marginLeft')}
    ${propToStyle('marginRight')}
    ${propToStyle('justifyContent')}
`;

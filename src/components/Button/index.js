import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const ButtonBase = styled.button`
  width: 100%;
  padding: 12px 16px;
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  outline: 0;
  transition: .3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

export default function Button({ type, disabled, ...props }) {
  return (
    <div>
      <ButtonBase
        type={type}
        disabled={disabled}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Button.propTypes = {
  disabled: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

import styled from 'styled-components';

export const StyledVideo = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  flex: 1;
  align-items: center;
  flex-direction: column;
  background-color: black;
  justify-content: center;
  height: 100%;
`;

export const StyledVideoImg = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
`;

export const StyledProductVideoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledProductVideo = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export const StyledControlVideo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: white;
  padding: 8px 16px;
  height: 40px !important;
`;

export const StyledVideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const StyledPlayBtn = styled.span`
  min-width: 24px;
  cursor: pointer;
`;

export const StyledTimeVideo = styled.span`
  line-height: 1.45;
  font-size: 11px;
  height: 16px;
  padding: 0 12px;
  white-space: nowrap;
`;

export const StyledDurationInput = styled.input<{ currentPercent?: number }>`
  &[type='range'] {
    -webkit-appearance: none;
  }
  &::-webkit-slider-thumb {
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background: #fff !important;
    cursor: pointer;
    margin-top: -5px;
    transition: all 0.3s;
    -webkit-appearance: none;
  }
  &::-moz-range-thumb {
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
  &::-ms-thumb {
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track {
    height: 2px;
    cursor: pointer;
    background: linear-gradient(
      90deg,
      #2196f3
        ${({ currentPercent }) => {
          return `${currentPercent}%`;
        }},
      #787878
        ${({ currentPercent }) => {
          return `${currentPercent}%`;
        }}
    );
  }
  ::-moz-range-track {
    height: 2px;
    cursor: pointer;
    background: linear-gradient(
      90deg,
      #2196f3
        ${({ currentPercent }) => {
          return `${currentPercent}%`;
        }},
      #787878
        ${({ currentPercent }) => {
          return `${currentPercent}%`;
        }}
    );
  }
  display: flex;
  flex: 1;
  height: 2px;
  border-radius: 1px;
`;

export const StyledSoundMute = styled.span`
  min-width: 48px;
  padding: 0 12px;
  object-fit: contain;
  cursor: pointer;
`;

export const StyledExpand = styled.span`
  min-width: 24px;
  object-fit: contain;
  cursor: pointer;
`;

export const ImageBadges = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
`;

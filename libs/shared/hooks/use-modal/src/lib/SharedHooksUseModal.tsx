/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';

export const useModal1 = (val: boolean) => {
  const [open, setOpen] = useState(val);
  return {
    show: open,
    open: useCallback(() => {
      setOpen(true);
    }, []),
    close: useCallback(
      () => () => {
        setOpen(false);
      },
      []
    ),
  };
};

export const useModal2 = (val: any) => {
  const [first, setFirst] = useState(val);
  const handleFn = useCallback((e: (arg0: any) => any) => {
    setFirst((prev: any) => ({
      ...prev,
      ...(typeof e === 'function' ? e(prev) : e),
    }));
  }, []);

  return [first, handleFn];
};

export const useModal3 = (val: any) => {
  const [isShow, setIsShow] = useState(val);
  const [isOpened, setIsOpened] = useState(val);

  return {
    showModal: isShow,
    modalOpened: isOpened,
    openModal: useCallback(() => {
      setIsOpened(true);
      setIsShow(true);
    }, []),
    closeModal: useCallback(() => {
      setIsShow(false);
    }, []),
  };
};

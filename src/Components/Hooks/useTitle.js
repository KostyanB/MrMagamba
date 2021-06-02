import { useEffect } from 'react';

export const useTitle = openItem => {
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = openItem ? openItem.name : 'MrMagamba';
  }, [openItem]) //передали массив - ограничили перерендер при удалении
}
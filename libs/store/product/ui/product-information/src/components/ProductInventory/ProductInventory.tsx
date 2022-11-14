import { CSSProperties } from 'react';
import styled from 'styled-components';

const inventoryStatusStyle: CSSProperties = {
  fontSize: 15,
  lineHeight: '24px',
  textTransform: 'uppercase',
  display: 'flex',
};

const InventoryUpcoming = () => {
  return (
    <div style={{ ...inventoryStatusStyle, color: '#009900' }}>Sắp có hàng</div>
  );
};
const InventoryOutOfStock = () => {
  return (
    <div style={{ ...inventoryStatusStyle, color: '#FF424E' }}>Hết hàng</div>
  );
};
const InventoryDiscontinued = () => {
  return (
    <div style={{ ...inventoryStatusStyle, color: '#FF424E' }}>
      Ngừng kinh doanh
    </div>
  );
};

enum InventoryStatus {
  AVALIABLE = 'available',
  PRE_ORDER = 'pre_order',
  OUT_OF_STOCK = 'out_of_stock',
  UPCOMMING = 'upcoming',
  DISCONTINUED = 'discontinued',
}
type Props = {
  inventoryStatus?: InventoryStatus;
};
export const ProductInventory = ({ inventoryStatus }: Props) => {
  switch (inventoryStatus) {
    case InventoryStatus.UPCOMMING:
      return <InventoryUpcoming />;
    case InventoryStatus.OUT_OF_STOCK:
      return <InventoryOutOfStock />;
    case InventoryStatus.DISCONTINUED:
      return <InventoryDiscontinued />;
    default:
      return null;
  }
};

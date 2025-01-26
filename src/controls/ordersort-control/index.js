import {memo} from '@wordpress/element';
import {ReactSortable} from "react-sortablejs";

const OrderSortControl = memo(({items=[], onChange, className = ''}) => {
  return (
    <div className={`zolo-sort-order-control ${className}`}>
      <ReactSortable
        list={items}
        setList={onChange}
        className={`zolo-sort-order-control-wrap`}
      >
        {items.map((item) => (
          <div className="zolo-sort-order-item" key={item.id}>
            {item.name}
          </div>
        ))}
      </ReactSortable>
    </div>
  );
});
export default OrderSortControl;

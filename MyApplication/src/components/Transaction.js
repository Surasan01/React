import Item from "./Item"
import './Transaction.css'
const Transaction =()=>{
    return (
      <ul className="item-list">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        {/* <li>เงินเดือน <span>+20,000</span></li>
        <li>ค่าอาหาร <span>-500</span></li> */}
      </ul>
    )
}

export default Transaction
import {collection, getFirestore} from "firebase/firestore";
import { useContext } from "react";

export default function Collection() {
   const [buyer, setBuyer] = useState({
       name: "",
       email: "",
       phone: ""
   });
   
    const [orderId, setOrderId] = useState(null);
    const {cart, total} = useContext(Cartcontext);

    const senOrder = () =>{
        const order = {
            buyer: buyer,
            item: [{name: "Battlefield", price:150,
            description: "Battlefield"}],
            total: 150,
        };
    

        const db = getFirestore();

        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({id}) => setOrderId(id));
    };
    
    return (
        <div>
            <input
                value={buyer.name}
                name="name"onChange={(e) => setBuyer({...buyer, name: e.target.value})}
                />
        </div>
    );
};
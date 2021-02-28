import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const recruitedList = props.recruited;

    //Calculating total budget using reduce method
    const totalBudget = recruitedList.reduce((total, each) => {
        total = total + each.salary;
        return total;
    }, 0)
    return (
        <div  >
            <div className="cart "  >
                <div className="heading" >
                    <h4 className="mb-3" >Summary</h4>
                    <h6>Total selected: {recruitedList.length}</h6>
                    <h6>Total budget: $ {totalBudget} </h6>
                    <h5 className="mt-4" >Selected Players</h5>
                </div>
                <table className="table text-white" >
                    <thead> <th>Photo</th> <th>Name</th> <th>Salary</th> </thead>
                    {
                        recruitedList.map((each) => {
                            return <tr> <td> <img src={each.image} alt="" srcset="" /> </td>  <td> {each.name}</td><td>{each.salary}</td> </tr>
                        })
                    }
                </table>
            </div>
        </div>
    );
};

export default Cart;
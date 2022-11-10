import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store';
import { decrement, increment, incrementByAmount } from '../../store/slices/counterSlice';

export function CounterPage() {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counter).value

    return <div>
        <h3>Counter</h3>
        <div>
            <button onClick={() => {
                dispatch(decrement())
            }} > - </button> | {counter} | <button onClick={() => {
                dispatch(increment())
            }}> + </button>
        </div>
        <br/>
        <div>
            <button onClick={()=>{
                dispatch(incrementByAmount(7))
            }}>Increment by 7</button>
        </div>
    </div>;
}
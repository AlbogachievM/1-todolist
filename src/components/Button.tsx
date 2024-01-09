import { FC } from 'react';
import { FilterValueType } from '../App';

type ButtonPropsType = {
    title: string
    onClickHandler: ()=> void
}

const Button: FC<ButtonPropsType> = ({title, onClickHandler}) => {
    return (
        <button onClick={()=>onClickHandler}>{title}</button>
    );
};

export default Button;
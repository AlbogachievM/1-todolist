import { FC } from 'react';

type ButtonPropsType = {
    title: string
}

const Button: FC<ButtonPropsType> = ({title}) => {
    return (
        <button>{title}</button>
    );
};

export default Button;
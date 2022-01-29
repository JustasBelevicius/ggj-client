import './Button.css';

export default function Button({title, onClick, extraClass}: ButtonProps) {
    return <button className={'button ' + extraClass || ""} onClick={onClick}>{title}</button>
}

interface ButtonProps {
    title: string;
    onClick: () => void;
    extraClass?: string;
}
import './Button.css';

export default function Button({title, onClick, extraClass}: ButtonProps) {
    const onClickInternal = () => {
        const sound = new Audio(`${process.env.PUBLIC_URL}/sounds/chipsCollide${Math.round(Math.random() * 3 + 1)}.mp3`);
        sound.play();
        onClick();
    }

    return <button className={'button ' + extraClass || ""} onClick={onClickInternal}>{title}</button>
}

interface ButtonProps {
    title: string;
    onClick: () => void;
    extraClass?: string;
}
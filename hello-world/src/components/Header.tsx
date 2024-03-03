type Props = {
    name: string;
    age: number;
}
export const Header = ({name, age}: Props) => {
    return (
        <header>
            <h1>Olá, {name}, tudo bem? Parebéns pelos seus {age} anos. </h1>
        </header>
    );
}
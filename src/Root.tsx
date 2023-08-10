export const Root = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '1rem',
        }}>
            <a href="/context-and-reducer">Context</a>
            <a href="/zustand">Zustand</a>
        </div>
    );
};
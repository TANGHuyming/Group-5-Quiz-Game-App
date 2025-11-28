export default function DescriptionCard({title, list}) {
    return (
        <div className="description-card">
            <h4>{title}: </h4>
            <ol style={{textAlign: "left"}}>
                {list.map((listItem) => {
                    return (
                        <li>{listItem}</li>
                    );
                })}
            </ol>
        </div>
    );
}
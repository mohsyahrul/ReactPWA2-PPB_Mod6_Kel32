import React from "react";
import "./index.css";
export default function index({ data, onClick }) {
    if (!data || !data.i || !data.i.imageUrl) {
        const imageUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7wS0psjddav-rSg1XoFFMt0U8Qv8jnUxLg&usqp=CAU`;
        const desc = "No Image";
        
        return (
            <div className="card" onClick={onClick}>
                <figure>
                <img src={imageUrl} alt={data.l} />
                </figure>
                <div className="card-info">
                    <h3>{data.l}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        );
    }
    return (
        <div className="card" onClick={onClick}>
        {data ? (
            <>
                <figure>
                    <img src={data.i.imageUrl} alt={data.l} />
                </figure>
                <div className="card-info">
                    <h3>{data.l}</h3>
                    <p>{data.q}</p>
                </div>
            </>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
}
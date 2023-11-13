import React from "react";
import "./index.css";

export default function index({ isShow, data, onCancel }){
    if (!data || !data.i || !data.i.imageUrl) {
        const imageUrl = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7wS0psjddav-rSg1XoFFMt0U8Qv8jnUxLg&usqp=CAU`;
        return (
            <div className={!isShow ? "hidden" : ""} datacy="modal-delete">
                <div className="modal-bg" onClick={onCancel}></div>
                <div className="modal">
                    {data && <img src={imageUrl} alt={data.l} />}
                </div>
            </div>
        );
    }
    return (
        <div className={!isShow ? "hidden" : ""} datacy="modal-delete">
            <div className="modal-bg" onClick={onCancel}></div><div className="modal">
                {data && <img src={data.i.imageUrl} alt="sesuatu"/>}
            </div>
        </div>
    );
}

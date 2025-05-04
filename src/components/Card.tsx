import React from "react";
import { Document } from "../schemas/documentSchema";
import { useNavigate } from "react-router-dom";

type SimpleCardProps = {
  data: Document;
};

const Card: React.FC<SimpleCardProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/document/${data.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full max-w-sm cursor-pointer rounded-lg border bg-amber-50 border-gray-300 transition duration-400 ease-in-out hover:scale-105 hover:shadow-lg"
    >
      <img
        src={data.imagen}
        alt={`Imagen del proyecto ${data.proyecto}`}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{data.proyecto}</h3>
        <hr />
        <p className="text-sm  text-gray-500 mt-1">Modulo: {data.modulo}</p>
        <hr className="text-sm text-gray-300 mt-1" />
        <p className="text-sm text-gray-500 mt-1"> Descripción: <br />{data.descripcion}</p>
        <p className="text-xs text-right text-gray-400 mt-4">
          {new Date(data.updatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Card;

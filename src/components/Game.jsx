import { useEffect, useState } from "react";
import { fetchImageDataArray } from "../utilities/fetchImageUrl";
import GameBoard from "./GameBoard";

const rawImageDatas = [
  { id: 0, imageId: "FT6DYlscgddh8cTR6d", name: "Cow" },
  { id: 1, imageId: "1TclRbrzTBqiXSOZFY", name: "Pig" },
  { id: 2, imageId: "uJy14yIR4NoPK", name: "Cat" },
  { id: 3, imageId: "lqGVQgBy93GB0pp0ny", name: "Chicken" },
  { id: 4, imageId: "hqgD6bocRHhEjamBPA", name: "Dog" },
  { id: 5, imageId: "CP3Oe5uMo60r1nAEBV", name: "Owl" },
  { id: 6, imageId: "ij7ZUDifM6Vtr89MDf", name: "Snake" },
  { id: 7, imageId: "01X0YnONDaAZW2Iij8", name: "Bear" },
  { id: 8, imageId: "9Y1LEFKsbbP4hrLgV3", name: "Duck" },
  { id: 9, imageId: "pfX2KITcXGyqfzaPMB", name: "Elephant" },
];

export default function Game() {
  const [newCardData, setNewCardData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const promiseExecution = async () => {
      if (abortController.signal.aborted) return;

      try {
        const imageIds = rawImageDatas.map((data) => data.imageId);
        const imageDatas = await fetchImageDataArray(imageIds, abortController);

        const cardDatas = rawImageDatas.map((value, index) => {
          return {
            id: value.id,
            imageUrl: imageDatas.data[index].images.original.url,
            name: value.name,
            isSelected: false,
          };
        });
        setNewCardData(cardDatas);
      } catch (error) {
        if (error.name === "AbortError") console.log("Fetch aborted");
        else console.log(error);
      }
    };

    promiseExecution();

    return () => abortController.abort();
  }, []);

  return <GameBoard cardData={newCardData} />;
}

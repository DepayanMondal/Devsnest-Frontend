import React from "react";
import styled from "styled-components";

const MemeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MemeImg = styled.img`
  background-size: contain;
  background-repeat: no-repeat;
  width: auto;
`;

const Meme = ({ data, setMeme }) => {
  const [form, setform] = React.useState({
    template_id: data.id,
    username: "DepayanMondal",
    password: "12345678",
    boxes: [],
  });
  const backupUrl = data.url;
  const generateMeme = () => {
    if (form.boxes.length === 0 || form.boxes[0] === "") {
      alert("Enter the captions please!");
      setMeme({ ...data, url: backupUrl });
      return;
    }
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, ind) => {
      console.log(ind, box.text);
      url += `&boxes[${ind}][text]=${box.text}`;
      return 0;
    });
    fetch(url)
      .then((res) => res.json())
      .then((responseData) => {
        setMeme({ ...data, url: responseData.data.url });
      });
  };

  //https://dev.to/sbodi10/download-images-using-javascript-51a9
  async function downloadImage() {
    const image = await fetch(data.url);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = data.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <MemeBox>
      <MemeImg src={data.url} style={{ height: "50vh" }} />
      <div>
        {[...Array(data.box_count)].map((_, index) => (
          <input
            type={"text"}
            key={index}
            placeholder={`Meme Caption ${index + 1}`}
            onChange={(e) => {
              let newBoxes = form.boxes;
              newBoxes[index] = { text: e.target.value };
              setform({ ...form, boxes: newBoxes });
            }}
          />
        ))}
      </div>
      <button onClick={generateMeme}>Create Meme</button>
      <button onClick={() => setMeme(null)}>Choose Template</button>
      <button onClick={downloadImage}>Download Meme</button>
    </MemeBox>
  );
};

export default Meme;

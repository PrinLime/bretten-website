import React from "react";

export const members = [
  {
    image:
      "https://bsb-bretten.de/wp-content/uploads/2022/10/rdn-1024x1024-190x190.jpeg",
    name: "Nicole Roeder",
    title: "Schulleiterin",
  },
  {
    image:
      "https://bsb-bretten.de/wp-content/uploads/2022/10/foos-1024x1024-190x190.jpeg",
    name: "Klaus-Martin Foos",
    title: "Steilvertretender Schulleiter",
  },
  {
    image:
      "https://bsb-bretten.de/wp-content/uploads/2022/10/kempf-1-1024x1024-190x190.jpeg",
    name: "Matthias Kempf",
    title: "Abteilungsleiter",
  },
  {
    image:
      "https://bsb-bretten.de/wp-content/uploads/2022/10/84B094DE-C3E2-4F92-85C8-1AD6DE1E4FF7-1024x1024-190x190.jpeg",
    name: "Sven Hölig",
    title: "Abteilungsleiter",
  },
  {
    image:
      "https://bsb-bretten.de/wp-content/uploads/2022/10/odw-1024x1024-190x190.jpeg",
    name: "Christian Odenwald",
    title: "Abteilungsleiter",
  },
  {
    image:
      "https://bsb-bretten.de/wp-content/uploads/2022/10/heilig-1024x1024-190x190.jpeg",
    name: "Gerd Heilig",
    title: "Abteilungsleiter",
  },
  {
    image:
      "https://bsb-bretten.de/wp-content/uploads/2022/10/neu-1024x1024-190x190.jpeg",
    name: "Andrea Neumann",
    title: "Abteilungsleiter",
  },
  {
    image: "src/assets/Mayer-1024x1024-600x600.jpeg",
    name: "Friederike Mayer ",
    title: "Schulleitungsassistenz",
  },
];

const InstagramEmbed: React.FC = () => {
  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/DBzC_WRsDkP/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "99.375%",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href="https://www.instagram.com/reel/DBzC_WRsDkP/?utm_source=ig_embed&amp;utm_campaign=loading"
            style={{
              background: "#FFFFFF",
              lineHeight: 0,
              padding: "0 0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Add inner structure here */}
            <div style={{ padding: "12.5% 0" }}></div>
            <div
              style={{
                display: "block",
                height: "50px",
                margin: "0 auto 12px",
                width: "50px",
              }}
            >
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 60 60"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                {/* SVG path */}
              </svg>
            </div>
            <div style={{ paddingTop: "8px" }}>
              <div
                style={{
                  color: "#3897f0",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 550,
                  lineHeight: "18px",
                }}
              >
                View this post on Instagram
              </div>
            </div>
            {/* Continue with inner structure */}
          </a>
          <p
            style={{
              color: "#c9c8cd",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              lineHeight: "17px",
              marginBottom: 0,
              marginTop: "8px",
              overflow: "hidden",
              padding: "8px 0 7px",
              textAlign: "center",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <a
              href="https://www.instagram.com/reel/DBzC_WRsDkP/?utm_source=ig_embed&amp;utm_campaign=loading"
              style={{
                color: "#c9c8cd",
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "17px",
                textDecoration: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              A post shared by Berufliche Schulen Bretten (@bsb_bretten)
            </a>
          </p>
        </div>
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;

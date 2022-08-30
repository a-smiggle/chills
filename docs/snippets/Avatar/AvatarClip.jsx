import React from "react";

export default function AvatarClip({ image, title, variant }) {
  const STYLES = {
    height: "h-16",
    width: "w-16",
    clip: {
      triangle: "[clip-path:polygon(50%_0%,0%_100%,100%_100%)]",
      trapezoid: "[clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)]",
      rhombus: "[clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]",
      pentagon: "[clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)]",
      hexagon:
        "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]",
      heptagon:
        "[clip-path:polygon(50%_0%,90%_20%,100%_60%,75%_100%,25%_100%,0%_60%,10%_20%)]",
      octagon:
        "[clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]",
      nonagon:
        "[clip-path:polygon(50%_0%,83%_12%,100%_43%,94%_78%,68%_100%,32%_100%,6%_78%,0%_43%,17%_12%)]",
      decagon:
        "[clip-path:polygon(50%_0%,80%_10%,100%_35%,100%_70%,80%_90%,50%_100%,20%_90%,0%_70%,0%_35%,20%_10%)]",
      bevel:
        "[clip-path:polygon(20%_0%,80%_0%,100%_20%,100%_80%,80%_100%,20%_100%,0%_80%,0%_20%)]",
      star: "[clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]",
      ellipse: "[clip-path:ellipse(25%_45%_at_50%_50%)]",
      ellipse2: "[clip-path:ellipse(45%_25%_at_50%_50%)]",
    },
  };

  return (
    <a href="#" title={title ?? "Avatar"} className="block relative">
      <img
        alt="profile"
        src={image || "https://api.lorem.space/image/face?w=150&h=150"}
        className={`object-cover ${STYLES.height} ${STYLES.width} ${
          variant ? STYLES.clip[variant] : STYLES.clip.triangle
        }`}
      />
    </a>
  );
}

import react from "react"
import styles from "./AlbumCard.module.css"
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import HeroIcon from "../assets/vibrating-headphone.png"
import Chip from '@mui/material/Chip';

export default function AlbumCard({ img, followers, name, liking }) {
    const followersLabel = `${followers} Following`
    const likesLabel = `${liking} Likes`
    return (
        <div className={styles.card}>
            <div className={styles.firstLayer}>
                <img src={img} height={170} alt="song" className={styles.cardImg} />
                <div className={styles.chipsHome}>
                    {followers == undefined ?
                        <Chip label={likesLabel} size="small" className={styles.chip} />
                        :
                        <Chip label={followersLabel} size="small" className={styles.chip} />
                    }

                </div>
                <p className={styles.cardTitle}>{name}</p>
            </div>
        </div>
    )
}
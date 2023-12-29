import React, { useEffect, useState } from "react"
import styles from "./Section.module.css"
import Button from "./Button"
import Grid from "@mui/material/Grid"
import AlbumCard from "./AlbumCard"
import axios from 'axios'

export default function Section() {
    const [albumData, setAlbumData] = useState([])
    useEffect(() => {
        getAlbumData();
    }, [])
    const getAlbumData = async () => {
        let response = await axios.get('https://qtify-backend-labs.crio.do/albums/top')
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.data;
                } else {
                    throw new Error("API Failed")
                }
            })
            .catch((error) => {
                console.log('Milan Error : ' + error.message)
                return null
            })
        if (response !== null) {
            setAlbumData(response);
            console.log(JSON.stringify(response[0].image))
        }
    }
    return (
        <div className={styles.section}>
            <div className={styles.sectionHeader}>
                <label>Top Albums</label>
                <Button buttonText="Collapse" />
            </div>
            <Grid container spacing={2}>
                {albumData.map((val) => {
                    return (
                        <Grid item xs={12 / 7} key={val.id}>
                            <AlbumCard img={val.image} followers={val.follows} name={val.title}/>
                        </Grid>
                    )
                })}
            </Grid>
            {/* <Grid container spacing={2}>
                <Grid item xs={12 / 7}>
                    <AlbumCard img={albumData.image} />
                </Grid>
                <Grid item xs={12 / 7}>
                    <AlbumCard />
                </Grid>
                <Grid item xs={12 / 7}>
                    <AlbumCard />
                </Grid>
                <Grid item xs={12 / 7}>
                    <AlbumCard />
                </Grid>
                <Grid item xs={12 / 7}>
                    <AlbumCard />
                </Grid>
                <Grid item xs={12 / 7}>
                    <AlbumCard />
                </Grid>
                <Grid item xs={12 / 7}>
                    <AlbumCard />
                </Grid>
            </Grid> */}
        </div>
    )
}
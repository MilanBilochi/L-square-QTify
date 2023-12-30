import React, { useEffect, useState } from "react"
import styles from "./Section.module.css"
import Button from "./Button"
import Grid from "@mui/material/Grid"
import AlbumCard from "./AlbumCard"
import axios from 'axios'

export default function Section() {
    const [topAlbumData, setTopAlbumData] = useState([])
    const [newAlbumData, setNewAlbumData] = useState([])
    useEffect(() => {
        getTopAlbumData();
        getNewAlbumData();
    }, [])
    const getNewAlbumData = async () => {
        let response = await axios.get('https://qtify-backend-labs.crio.do/albums/new')
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
            setNewAlbumData(response);
            console.log(JSON.stringify(response[0].image))
        }
    }
    const getTopAlbumData = async () => {
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
            setTopAlbumData(response);
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
                {topAlbumData.map((val) => {
                    return (
                        <Grid item xs={12 / 7} key={val.id}>
                            <AlbumCard img={val.image} followers={val.follows} name={val.title}/>
                        </Grid>
                    )
                })}
            </Grid>
            <div className={styles.lineBreak}></div>
            <div className={styles.sectionHeader}>
                <label>New Albums</label>
                <Button buttonText="Collapse" />
            </div>
            <Grid container spacing={2}>
                {newAlbumData.map((val) => {
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
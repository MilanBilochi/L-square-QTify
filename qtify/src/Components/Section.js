import React, { useEffect, useState } from "react"
import styles from "./Section.module.css"
import Button from "./Button"
import Grid from "@mui/material/Grid"
import AlbumCard from "./AlbumCard"
import axios from 'axios'
import Carousel from "./Carousel"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

export default function Section({ showButton, sectionHeader }) {
    const [data, setData] = useState([]);
    const [genre, setGenre] = useState([]);
    const [value, setValue] = useState(0);
    const [topAlbumData, setTopAlbumData] = useState([])
    const [newAlbumData, setNewAlbumData] = useState([])
    const [buttonText, setButtonText] = useState('Show All');
    const [newAlbumButtonText, setNewAlbumButtonText] = useState('Show All');
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isNewAlbumCollapsed, setIsNewAlbumCollapsed] = useState(false);
    const handleChange = (event, newValue) => {
        console.log(newValue)
        console.log('Milan new value in handle change method : ' + JSON.stringify(genre[newValue-1]))
        setValue(newValue);
        
        // let newData = [...data] 
        // newData = newData.filter((val) => {
        //     console.log('milan check genre : ' + val.genre.key)
        //     return val.genre.key == genre[newValue].key})
        // console.log('Milan filtered songs : ' + JSON.stringify(newData))
        // setData(newData)
        
    };
    useEffect(() => {
        getData();
    }, [value])
    useEffect(() => {
        // fetchGenre();
        // async function fetchGenre() {
        //     let response = await axios.get("https://qtify-backend-labs.crio.do/genres")
        //     .then((response) => {
        //         return response.data
        //     })
        //     .catch((error) => {
        //         return null
        //     });
        // if (response !== null) {
        //     setGenre(response.data);
        // }
        // }
        fetchGenre();
        getData();
    }, [])
    const fetchGenre = async () => {
        let response = await axios.get("https://qtify-backend-labs.crio.do/genres")
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return null
            });
        if (response !== null) {
            setGenre(response.data);
        }
    }
    const getData = async () => {
        let response;
        if (sectionHeader !== "songs") {
            response = await axios.get('https://qtify-backend-labs.crio.do/albums/' + sectionHeader)
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
        } else {
            console.log("Searching songs ?")
            response = await axios.get('https://qtify-backend-labs.crio.do/' + sectionHeader)
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
        }
        if (response !== null) {
            let newData;
            // console.log('first value value : ' + value)
            if(value !== 0) {
                newData = response.filter((val) => {
                    return val.genre.label === genre[value-1].label 
                    // console.log(val.genre.label)
                    // console.log(genre)
                })
            } else {
                console.log(JSON.stringify(response))
                newData = response;
            }
             
            setData(newData);
            // console.log(JSON.stringify(response[0].image))
        }
    }
    return (
        <div className={styles.section}>

            <div className={styles.sectionHeader}>
                {sectionHeader === "top" ? <label>Top Albums</label> : sectionHeader === "new" ? <label>New Albums</label> : <label>Songs</label>}
                {showButton && <Button buttonText={buttonText} setButtonText={setButtonText} setIsCollapsed={setIsCollapsed} comingFrom="topAlbum" />}
            </div>
            {
                !showButton &&
                <div className={styles.songTabs}>
                    <TabContext value={value} >
                            <TabList onChange={handleChange} className={styles.songTabs} textColor="inherit" TabIndicatorProps={{
                                style: {
                                    backgroundColor: "green",
                                }
                            }}
                            >
                                <Tab label="All" value={0} className={styles.songTabs} />
                                {genre.map((val) => {
                                    return (
                                        <Tab label={val.label} value={genre.indexOf(val)+1} className={styles.songTabs} />
                                    )
                                })}
                            </TabList>
                    </TabContext>
                </div>
            }


            {isCollapsed ?
                <Grid container spacing={2}>
                    {data.map((val) => {
                        return (
                            <Grid item xs={12 / 7} key={val.id}>
                                <AlbumCard img={val.image} followers={val.follows} name={val.title}  />
                            </Grid>
                        )
                    })}
                </Grid>
                :
                <Carousel data={data} />
            }
            <div className={styles.lineBreak}></div>
        </div>
    )
}
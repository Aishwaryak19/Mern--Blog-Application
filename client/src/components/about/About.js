import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://media.istockphoto.com/id/1182604339/photo/businessman-using-mobile-smartphone-and-icon-network-connection-data-with-growth-graph.jpg?s=170667a&w=0&k=20&c=xEUEUvmCPgRanzF67qKJhSgUhQM9BxOj2rzUjke-0kI=);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">About Us</Typography>
                <Text variant="h5">I'm a Software Engineer based in India Maharashtra. 
                    I've built websites,Mern websites, desktop applications<br />
                   You can view some of my  projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Aishwaryak19" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                         send me an Email 
                        <Link href="mailto:aishwaryakulkarni2000@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;
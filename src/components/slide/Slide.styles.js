import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        margin: '0 auto',
        width: '100%',
        maxWidth: '900px',
        "& img": {
            height: 300,
            width: '100%',
            objectFit: 'cover',
            filter: 'blur(1px)',
            transition: 'all .3s ease-in',
        },
        "& *": {
            color: '#e7dfdf',
        },
        "& .MuiTypography-root": {
            textShadow: '1px 1px 1px rgb(0,0,0)',
            marginBottom: '.5em',
        },
        "& .MuiChip-root":{
            borderRadius:'0'
        }
    },
    content: {
        position: 'absolute',
        width: '85%',
        top:'10%',
        textAlign: 'right',
        paddingRight: '2em',
        paddingLeft: '2em',
    },
    category: {
        backgroundColor: '#eb0254',
        padding: '.2em .5em'
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: '700',
        textShadow: '1px 1px 1px rgb(0,0,0)',
        marginBottom: '.5em',
    },

});
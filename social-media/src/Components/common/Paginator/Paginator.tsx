import React, {useState} from 'react';
import './Paginator.scss';
import { makeStyles } from '@material-ui/core/styles';
import {Pagination} from '@material-ui/lab';
import { PaginationItem } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  type PaginatorPropsType = {
    requestUsers:(page:number) => void,
    portionSize?:number,
    pageSize:number,
    currentPage:number,
    totalUsersCount:number
  }


let Paginator: React.FC<PaginatorPropsType> = ({ requestUsers, portionSize = 10, ...props }) => {
    let [portionNumber, setPortionNumber] = useState<number>(1);


    let { pageSize,
        totalUsersCount, currentPage
    } = props;

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize +1;
    let rightPortionPageNumber = portionNumber * portionSize;


    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Pagination  onChange={(event,page) => requestUsers(page)}  count={pages.length} variant="outlined" shape="rounded" />
        </div>
        // <div>
           
        //     {portionNumber && portionNumber > 1 ? <button onClick={()=>setPortionNumber(portionNumber - 1)}>Prev</button>: null}
              
        //     {
        //         pages
        //         .filter( el =>  el >= leftPortionPageNumber && el <= rightPortionPageNumber )
        //             .map((el, index) => (

        //                     <div className="wrappPagination">
                                
        //                         <span
        //                             key={index}
        //                             onClick={() => { requestUsers(el) }}
        //                             className={classNames('pageCount',
        //                                 currentPage === el && "selectedPage")} >
        //                             {el}
        //                         </span>
                               
        //                     </div>
        //             ))
 
        //     }
        //     {portionCount > portionNumber ? <button onClick={()=>setPortionNumber(portionNumber + 1)}>Next</button> : null}
            
        // </div>
    );
}

export default Paginator;
import { db } from '../../firebase/firebase';
export default {
    state: {
        edit: {
            name : ''
        }
    },
    reducers: {
        list: (state, payload, arr) => {
            return {
              ...state,
              [arr]: payload,
            //   [arr + 'Pag']: payload.metadata
            };
        },
        obj: (state, payload, arr) => {
            return {
              ...state,
              [arr]: payload,
            //   [arr + 'Pag']: payload.metadata
            };
        },
      
    },
    effects: dispatch => ({
        async fetchData() {
            db.ref('proyectos').on('value', (snapshot, index) => {  
                const  data =snapshot.val(); 
                console.log(data)
                if(data){
                    const result = Object.keys(data).map( (i) => { 
                        data[i].id = i;
                        return data[i]
                    })  

                    this.list(result ,'projects')
                }
            })
        //     info.url =  info.endpoint;
        //     get(info)
        //       .then(data => {
        //         // console.log('ESTOY EN FETCHDATA: ', data);
        //         const temp = info.arr ? info.arr : info.endpoint.split('/')[1];
        //         this.list(data, temp);
        //         dispatch.loadingModel.loadingData(true);
        //       })
        //       .catch(error => {
        //         const res = {
        //           status: 400,
        //           userMessage: error.userMessage,
        //           open: true
        //         };
        //         dispatch.messageModel.message(res);
        //         dispatch.loadingModel.loadingData(false);
        //       });
          },
        async fetchDataId(id){
            db.ref(`proyectos/${id}`).on('value', (snapshot ) => { 
                const data = snapshot.val()
                data['start_date'] = new Date(data.start_date)
                data['end_date'] = new Date(data.end_date)
                data['deposit_date'] = new Date(data.deposit_date)
                data['cotizacion_date'] = new Date(data.cotizacion_date)
                
                console.log(data)
                this.list(data, 'editProject')
            })
        }
      
    })
}
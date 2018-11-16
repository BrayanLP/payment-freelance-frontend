export default {
    state: {},
    reducers: {
        list: (state, payload, arr) => {
            return {
              ...state,
              [arr]: payload.results,
              [arr + 'Pag']: payload.metadata
            };
          }
      
    },
    effects: dispatch => ({
        async fetchData(info) {
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
          }
      
    })
}
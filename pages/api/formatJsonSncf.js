/**
 * formats SNCF request results for train cost 
 * @param {Object} data request results 
 * @return {Object}formatted data 
 */
  function formatJsonSncf(data) {
    // the different costs of SNCF API     
   const couts = {
       costPlein: data.records[0].fields.plein_tarif_loisir_2nde,
       costAppel: data.records[0].fields.prix_d_appel_2nde,
   }
   return (JSON.parse(JSON.stringify(couts)));
} 
export default formatJsonSncf; 
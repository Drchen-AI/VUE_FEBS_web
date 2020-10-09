import service from '../FEBS-Cloud-We/src/utils/request'

export function GetcodeIndustry(data = {}){
  return service.request({
    method: 'get',
    url: '/demp/info/codeIndustry',
    data
  })
}

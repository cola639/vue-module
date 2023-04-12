import request from '@/utils/request'

// 附件上传
export function uploadFile(data) {
  return request({
    url: 'upload',
    method: 'post',
    data
  })
}

// 附件列表
export function getFileslist(params) {
  return request({
    url: '/system/attachment/list',
    method: 'GET',
    params
  })
}

// 附件删除
export function deleteFile(id) {
  return request({
    url: `/system/attachment/remove/${id}`,
    method: 'DELETE'
  })
}

import apiClient from './apiClient'

export async function fetchOutlets() {
  const { data } = await apiClient.get('/api/outlets')
  return data
}

export async function fetchAdminOutlets() {
  const { data } = await apiClient.get('/api/admin/outlets')
  return data
}

export async function fetchOutletById(outletId) {
  const { data } = await apiClient.get(`/api/outlets/${outletId}`)
  return data
}

export async function updateOutlet(outletId, payload) {
  const { data } = await apiClient.put(`/api/outlets/${outletId}`, payload)
  return data
}

import apiClient from './apiClient'

export async function getGoogleConnectionStatus(outletId) {
  const { data } = await apiClient.get('/api/auth/google/status', { params: { outletId } })
  return data
}

export function startGoogleOAuth(outletId) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
  const url = `${baseUrl}/api/auth/google?outletId=${encodeURIComponent(outletId)}`
  window.location.href = url
}

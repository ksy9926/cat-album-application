const API = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev'

export const getCatInfos = async () => {
  try {
    const res = await fetch(API)

    return res.json()
  } catch (e) {
    alert('데이터 불러오기 실패')
  }
}

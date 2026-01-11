import { create } from "zustand"

const useBlogStore = create((set, get) => ({
  blogs: [],
  selectedBlog: null,
  drafts: [],
  bookmarks: [],

  setBlogs: (blogs) => set({ blogs }),

  addBlog: (blog) =>
    set((state) => ({
      blogs: [blog, ...state.blogs],
    })),

  selectBlog: (blog) => set({ selectedBlog: blog }),

  clearSelectedBlog: () => set({ selectedBlog: null }),

  addDraft: (draft) =>
    set((state) => ({
      drafts: [...state.drafts, draft],
    })),

  removeDraft: (id) =>
    set((state) => ({
      drafts: state.drafts.filter((d) => d.id !== id),
    })),

  toggleBookmark: (blog) => {
    const { bookmarks } = get()
    const exists = bookmarks.find((b) => b.id === blog.id)

    if (exists) {
      set({
        bookmarks: bookmarks.filter((b) => b.id !== blog.id),
      })
    } else {
      set({
        bookmarks: [...bookmarks, blog],
      })
    }
  },
}))

export default useBlogStore

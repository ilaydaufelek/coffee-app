import modals from "@/routes/modal"
import { useModal } from "@/store/modal/hooks"
import EditModal from "../editModal"

export default function Modal() {
  const modal = useModal()
  const currentModal = modals.find((m) => m.name === modal.name)

  if (!currentModal) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-30">
      {currentModal.name === "EditModal" && modal.data && (
        <EditModal data={modal.data} />
      )}
    </div>
  )
}

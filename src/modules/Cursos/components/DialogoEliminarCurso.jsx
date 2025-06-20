export function DialogoEliminarCurso({ open, onClose, cursoSeleccionado, onSuccess }) {
  const handleEliminar = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/db/cursos/${cursoSeleccionado.id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Error al eliminar");

      toast.success("Curso eliminado");
      onSuccess?.();
      onClose();
    } catch (err) {
      toast.error("Error al eliminar curso");
      console.error(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>¿Eliminar curso?</DialogTitle>
        </DialogHeader>
        <p className="text-sm">Esta acción no se puede deshacer.</p>
        <DialogFooter>
          <Button variant="destructive" onClick={handleEliminar}>
            Eliminar
          </Button>
          <Button onClick={onClose} variant="outline">Cancelar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

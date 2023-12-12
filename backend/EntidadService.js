// UsuarioService.java
@Stateless
public class UsuarioService {
    @PersistenceContext(unitName = "sistema-recargas")
    private EntityManager entityManager;

    public void registrarUsuario(Usuario usuario) {
        // Lógica para registrar un nuevo usuario en la base de datos
    }

    public Usuario iniciarSesion(String correo, String contraseña) {
        // Lógica para autenticar al usuario y devolver su información
    }

    // Otros métodos para realizar recargas, consultar saldo, etc.
}

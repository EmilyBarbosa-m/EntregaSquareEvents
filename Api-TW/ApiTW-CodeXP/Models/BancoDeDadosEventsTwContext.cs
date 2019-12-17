using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BancoDeDadosTw.Models
{
    public partial class BancoDeDadosEventsTwContext : DbContext
    {
        public BancoDeDadosEventsTwContext()
        {
        }

        public BancoDeDadosEventsTwContext(DbContextOptions<BancoDeDadosEventsTwContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Categoria> Categoria { get; set; }
        public virtual DbSet<Comunidade> Comunidade { get; set; }
        public virtual DbSet<Evento> Evento { get; set; }
        public virtual DbSet<Padrinho> Padrinho { get; set; }
        public virtual DbSet<Sala> Sala { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuario { get; set; }
        public virtual DbSet<Uploadtw> Uploadtw { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=LAB103701\\SQLEXPRESS;Database=BancoDeDadosEventsTw;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Categoria>(entity =>
            {
                entity.HasKey(e => e.IdCategoria)
                    .HasName("PK__Categori__A3C02A104373AFFE");

                entity.Property(e => e.NomeCategoria).IsUnicode(false);

                entity.Property(e => e.StatusCategoria).IsFixedLength();
            });

            modelBuilder.Entity<Comunidade>(entity =>
            {
                entity.HasKey(e => e.IdComunidade)
                    .HasName("PK__Comunida__0BA193C312D0C6D9");

                entity.HasIndex(e => e.ContatoComunidade)
                    .HasName("UQ__Comunida__85354D7CAF9401B2")
                    .IsUnique();

                entity.Property(e => e.ContatoComunidade).IsUnicode(false);

                entity.Property(e => e.NomeComunidade).IsUnicode(false);

                entity.Property(e => e.NomeResponsavelComunidade).IsUnicode(false);

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Comunidade)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Comunidad__IdUsu__6477ECF3");
            });

            modelBuilder.Entity<Evento>(entity =>
            {
                entity.HasKey(e => e.IdEvento)
                    .HasName("PK__Evento__034EFC047D64FFC4");

                entity.Property(e => e.DescricaoEvento).IsUnicode(false);

                entity.Property(e => e.LocalizacaoEvento).IsUnicode(false);

                entity.Property(e => e.NomeEvento).IsUnicode(false);

                entity.Property(e => e.RestricaoAlimentacao).IsUnicode(false);

                entity.HasOne(d => d.IdCategoriaNavigation)
                    .WithMany(p => p.Evento)
                    .HasForeignKey(d => d.IdCategoria)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Evento__IdCatego__5AEE82B9");

                entity.HasOne(d => d.IdSalaNavigation)
                    .WithMany(p => p.Evento)
                    .HasForeignKey(d => d.IdSala)
                    .HasConstraintName("FK__Evento__IdSala__59063A47");

                entity.HasOne(d => d.IdUploadNavigation)
                    .WithMany(p => p.Evento)
                    .HasForeignKey(d => d.IdUpload)
                    .HasConstraintName("FK__Evento__IdUpload__59FA5E80");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Evento)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Evento__IdUsuari__5BE2A6F2");
            });

            modelBuilder.Entity<Padrinho>(entity =>
            {
                entity.HasKey(e => e.IdPadrinho)
                    .HasName("PK__Padrinho__0FDA1C9BB1DDB162");

                entity.HasOne(d => d.IdEventoNavigation)
                    .WithMany(p => p.Padrinho)
                    .HasForeignKey(d => d.IdEvento)
                    .HasConstraintName("FK__Padrinho__IdEven__5FB337D6");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Padrinho)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Padrinho__IdUsua__5EBF139D");
            });

            modelBuilder.Entity<Sala>(entity =>
            {
                entity.HasKey(e => e.IdSala)
                    .HasName("PK__Sala__A04F9B3BBCE1FC7E");

                entity.Property(e => e.DescricaoSala).IsUnicode(false);

                entity.Property(e => e.NomeSala).IsUnicode(false);
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TipoUsua__CA04062B2F1E3DF0");

                entity.HasIndex(e => e.NomeTipoUsuario)
                    .HasName("UQ__TipoUsua__C6FB90A8D01E8DFE")
                    .IsUnique();

                entity.Property(e => e.NomeTipoUsuario).IsUnicode(false);
            });

            modelBuilder.Entity<Uploadtw>(entity =>
            {
                entity.HasKey(e => e.IdUpload)
                    .HasName("PK__UPLOADTw__3636385670E1D127");

                entity.Property(e => e.ImgEvento).IsUnicode(false);

                entity.Property(e => e.ImgSala).IsUnicode(false);

                entity.Property(e => e.ImgUser).IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__5B65BF97C7607AE4");

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuario__A9D1053431E8321F")
                    .IsUnique();

                entity.Property(e => e.Email).IsUnicode(false);

                entity.Property(e => e.NomeUser).IsUnicode(false);

                entity.Property(e => e.Senha).IsUnicode(false);

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__Usuario__IdTipoU__4CA06362");

                entity.HasOne(d => d.UploadNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.Upload)
                    .HasConstraintName("FK__Usuario__Upload__4E88ABD4");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

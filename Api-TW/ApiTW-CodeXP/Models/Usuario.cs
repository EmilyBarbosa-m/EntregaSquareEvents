﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BancoDeDadosTw.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
            Comunidade = new HashSet<Comunidade>();
            Evento = new HashSet<Evento>();
            Padrinho = new HashSet<Padrinho>();
        }

        [Key]
        public int IdUsuario { get; set; }
        public int? IdTipoUsuario { get; set; }
        [Required]
        [StringLength(255)]
        public string Email { get; set; }
        [Required]
        [StringLength(255)]
        public string Senha { get; set; }
        [Required]
        [StringLength(255)]
        public string NomeUser { get; set; }
        public bool StatusUser { get; set; }
        public int? Upload { get; set; }

        [ForeignKey(nameof(IdTipoUsuario))]
        [InverseProperty(nameof(TipoUsuario.Usuario))]
        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
        [ForeignKey(nameof(Upload))]
        [InverseProperty(nameof(Uploadtw.Usuario))]
        public virtual Uploadtw UploadNavigation { get; set; }
        [InverseProperty("IdUsuarioNavigation")]
        public virtual ICollection<Comunidade> Comunidade { get; set; }
        [InverseProperty("IdUsuarioNavigation")]
        public virtual ICollection<Evento> Evento { get; set; }
        [InverseProperty("IdUsuarioNavigation")]
        public virtual ICollection<Padrinho> Padrinho { get; set; }
    }
}

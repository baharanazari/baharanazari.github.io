namespace ICE_2Generation
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.panel1 = new System.Windows.Forms.Panel();
            this.label1 = new System.Windows.Forms.Label();
            this.BirthDatepicker = new System.Windows.Forms.DateTimePicker();
            this.resetButton = new System.Windows.Forms.Button();
            this.button1 = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.panel2 = new System.Windows.Forms.Panel();
            this.GenerationLabel = new System.Windows.Forms.Label();
            this.mottoLabel = new System.Windows.Forms.Label();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.panel1.SuspendLayout();
            this.panel2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.BackColor = System.Drawing.SystemColors.ControlLightLight;
            this.panel1.Controls.Add(this.panel2);
            this.panel1.Controls.Add(this.label2);
            this.panel1.Controls.Add(this.button1);
            this.panel1.Controls.Add(this.resetButton);
            this.panel1.Controls.Add(this.BirthDatepicker);
            this.panel1.Controls.Add(this.label1);
            this.panel1.Location = new System.Drawing.Point(45, 49);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(467, 562);
            this.panel1.TabIndex = 0;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Modern No. 20", 14F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(27, 24);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(260, 30);
            this.label1.TabIndex = 0;
            this.label1.Text = "pick your birth date : ";
            // 
            // BirthDatepicker
            // 
            this.BirthDatepicker.Location = new System.Drawing.Point(32, 76);
            this.BirthDatepicker.Name = "BirthDatepicker";
            this.BirthDatepicker.Size = new System.Drawing.Size(343, 26);
            this.BirthDatepicker.TabIndex = 1;
            // 
            // resetButton
            // 
            this.resetButton.Font = new System.Drawing.Font("Modern No. 20", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.resetButton.Location = new System.Drawing.Point(32, 135);
            this.resetButton.Name = "resetButton";
            this.resetButton.Size = new System.Drawing.Size(118, 42);
            this.resetButton.TabIndex = 2;
            this.resetButton.Text = "Reset🧹";
            this.resetButton.UseVisualStyleBackColor = true;
            this.resetButton.Click += new System.EventHandler(this.resetButton_Click);
            // 
            // button1
            // 
            this.button1.Font = new System.Drawing.Font("Modern No. 20", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.Location = new System.Drawing.Point(265, 135);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(145, 42);
            this.button1.TabIndex = 3;
            this.button1.Text = "Show result";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Modern No. 20", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(27, 205);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(213, 25);
            this.label2.TabIndex = 4;
            this.label2.Text = "Your generation is : ";
            // 
            // panel2
            // 
            this.panel2.BackColor = System.Drawing.Color.LightCyan;
            this.panel2.Controls.Add(this.pictureBox1);
            this.panel2.Controls.Add(this.mottoLabel);
            this.panel2.Controls.Add(this.GenerationLabel);
            this.panel2.Location = new System.Drawing.Point(23, 260);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(387, 274);
            this.panel2.TabIndex = 5;
            // 
            // GenerationLabel
            // 
            this.GenerationLabel.Font = new System.Drawing.Font("Modern No. 20", 11F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.GenerationLabel.Location = new System.Drawing.Point(27, 16);
            this.GenerationLabel.Name = "GenerationLabel";
            this.GenerationLabel.Size = new System.Drawing.Size(311, 30);
            this.GenerationLabel.TabIndex = 0;
            this.GenerationLabel.Text = "Generation Name";
            // 
            // mottoLabel
            // 
            this.mottoLabel.Font = new System.Drawing.Font("Modern No. 20", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.mottoLabel.Location = new System.Drawing.Point(17, 228);
            this.mottoLabel.Name = "mottoLabel";
            this.mottoLabel.Size = new System.Drawing.Size(355, 31);
            this.mottoLabel.TabIndex = 1;
            this.mottoLabel.Text = "Motto";
            this.mottoLabel.Visible = false;
            // 
            // pictureBox1
            // 
            this.pictureBox1.Location = new System.Drawing.Point(22, 49);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(330, 176);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
            this.pictureBox1.TabIndex = 2;
            this.pictureBox1.TabStop = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.ClientSize = new System.Drawing.Size(579, 637);
            this.Controls.Add(this.panel1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Bahara Nazari- Generation";
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.panel2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button resetButton;
        private System.Windows.Forms.DateTimePicker BirthDatepicker;
        private System.Windows.Forms.Label mottoLabel;
        private System.Windows.Forms.Label GenerationLabel;
        private System.Windows.Forms.PictureBox pictureBox1;
    }
}

